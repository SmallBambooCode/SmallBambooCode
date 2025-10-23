#!/bin/bash

# 提示用户确认是否继续
read -p "此脚本将更新系统并安装Python 3.10以及相关依赖。是否继续？(y/n) " -n 1 -r
echo    # (可选) 换行
if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    echo "操作已取消。"
    exit 1
fi

# 更新系统
echo "正在更新系统..."
sudo apt update && sudo apt upgrade -y

# 安装必要依赖
echo "正在安装必要的开发工具及依赖..."
sudo apt install -y build-essential libssl-dev zlib1g-dev libncurses5-dev \
libncursesw5-dev libreadline-dev libsqlite3-dev libgdbm-dev libdb5.3-dev \
libbz2-dev libexpat1-dev liblzma-dev tk-dev libffi-dev

# 下载并安装Python 3.10
echo "下载并安装Python 3.10..."
cd /usr/src
sudo wget https://www.smallbamboo.cn/Python-3.10.12.tgz
sudo tar xzf Python-3.10.12.tgz
cd Python-3.10.12

# 配置并编译Python
echo "配置并编译Python 3.10..."
sudo ./configure --enable-optimizations
sudo make altinstall

# 设置Python 3.10为默认版本
echo "配置Python和pip版本..."
sudo update-alternatives --install /usr/bin/python python /usr/local/bin/python3.10 1
sudo update-alternatives --install /usr/bin/python3 python3 /usr/local/bin/python3.10 1
sudo update-alternatives --config python
sudo update-alternatives --config python3

# 设置pip3.10为默认pip版本
sudo update-alternatives --install /usr/bin/pip pip /usr/local/bin/pip3.10 1
sudo update-alternatives --install /usr/bin/pip3 pip3 /usr/local/bin/pip3.10 1
sudo update-alternatives --config pip
sudo update-alternatives --config pip3

# 检查版本
echo "检查安装结果..."
python --version
python3 --version
pip --version
pip3 --version

echo "Python 3.10 安装完成！"
