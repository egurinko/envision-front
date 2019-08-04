echo "Start deploy to AWS S3 and cloudFront"

# Variables
stage=$1
firstLine=`sed -n 1p ./serverless.yml`
set ${firstLine}
applicationName=${2}


# making compiled file to dist.
yarn install
rm -rf ./dist
yarn build

# Upload by s3-deploy
./node_modules/.bin/s3-deploy './dist/**' --cwd './dist/' --bucket ${applicationName}-${stage} --profile default --region ap-northeast-1 --private