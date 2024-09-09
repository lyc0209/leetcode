FROM FROM node:22

SHELL ["/bin/bash", "-c"]

RUN sed -i 's@deb.debian.org@mirrors.tuna.tsinghua.edu.cn@g' /etc/apt/sources.list.d/debian.sources

RUN apt update

WORKDIR /workspace

