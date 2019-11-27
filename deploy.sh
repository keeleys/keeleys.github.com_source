# build源代码并且提交
yarn pro && \
cd dist && \
rm -rf .git && \
git init && \
git add . && \
git commit -m "auto commit" && \
git remote add origin git@github.com:keeleys/keeleys.github.com.git && \
git push -u origin master -f