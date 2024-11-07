#!/bin/bash

source .env

set -e

if [[ $1 == "-v" ]]; then
    OUT="/dev/stdout"
else
    OUT="/dev/null"
fi

echo "Enviando arquivos do projeto para o servidor..."
rm -f project.tar.gz

tar -czf project.tar.gz src public package.json package-lock.json tailwind.config.ts postcss.config.js tsconfig.json

scp -l 8100 project.tar.gz "$SERVER_USER@$SERVER_IP:$PROJECT_PATH/"

echo "Conectando ao servidor e descomprimindo os arquivos..."

ssh "$SERVER_USER@$SERVER_IP" > $OUT 2>&1 << EOF
export NVM_DIR="\$HOME/.nvm"
[ -s "\$NVM_DIR/nvm.sh" ] && \. "\$NVM_DIR/nvm.sh"  # Carrega o NVM
nvm use 20  # Seleciona a versão 20 do Node.js

cd "$PROJECT_PATH" || { echo "Erro: Caminho $PROJECT_PATH não encontrado"; exit 1; }
echo "Diretório atual no servidor: \$(pwd)"
ls -l project.tar.gz

tar -xzf project.tar.gz || { echo "Erro ao extrair project.tar.gz"; exit 1; }
npm install || { echo "Erro ao executar npm install"; exit 1; }
npm run build || { echo "Erro ao executar npm run build"; exit 1; }
EOF

echo "Reiniciando o projeto com PM2 e limpando arquivos temporários..."

ssh "$SERVER_USER@$SERVER_IP" > $OUT 2>&1 << EOF
export NVM_DIR="\$HOME/.nvm"
[ -s "\$NVM_DIR/nvm.sh" ] && \. "\$NVM_DIR/nvm.sh"  # Carrega o NVM
nvm use 20  # Seleciona a versão 20 do Node.js

cd "$PROJECT_PATH" || { echo "Erro: Caminho $PROJECT_PATH não encontrado para reiniciar PM2"; exit 1; }
pm2 restart $PROJECT_NAME
rm project.tar.gz
EOF

echo "Limpando arquivo comprimido local..."
rm project.tar.gz

echo -e "\n\033[32;1m----- Implantação concluída! -----\n"
