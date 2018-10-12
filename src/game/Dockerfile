FROM python:3.6

ENV NDK_VERSION=10.3.2
ENV USER="user"
ENV HOME_DIR="/home/${USER}"
ENV WORK_DIR="${HOME_DIR}/hostcwd" \
    PATH="${HOME_DIR}/.local/bin:${PATH}"


RUN dpkg --add-architecture i386 && apt update

RUN apt install -qq --yes --no-install-recommends \
    sudo python3-pip python-setuptools file

RUN apt install -qq --yes --no-install-recommends \
    wget \
    openjdk-8-jdk \
    libncurses5:i386 \
    libstdc++6:i386 \ 
    libgtk2.0-0:i386 \ 
    libpangox-1.0-0:i386 \ 
    libpangoxft-1.0-0:i386 \
    libidn11:i386 \
    zlib1g:i386 \
    zlib1g-dev \
    unzip \
    python3-dev

# prepares non root env
RUN useradd --create-home --shell /bin/bash ${USER}
# with sudo access and no password
RUN usermod -append --groups sudo ${USER}
RUN echo "%sudo ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers


RUN wget -q https://www.crystax.net/download/crystax-ndk-$NDK_VERSION-linux-x86_64.tar.xz \
    && tar xf crystax-ndk-$NDK_VERSION-linux-x86_64.tar.xz 


USER ${USER}
WORKDIR ${WORK_DIR}

RUN pip3 install --upgrade pip \
    && pip3 install --user \
    buildozer \
    cython==0.25.2

RUN sudo wget -q https://dl.google.com/android/repository/tools_r25.2.3-linux.zip
RUN sudo mkdir /home/user/android-sdk 
RUN sudo unzip tools_r25.2.3-linux.zip -d /home/user/android-sdk
RUN echo y | sudo /home/user/android-sdk/tools/bin/sdkmanager "platform-tools" "platforms;android-21" "build-tools;28.0.3"

RUN sudo wget -q http://apache-mirror.rbc.ru/pub/apache/ant/binaries/apache-ant-1.10.5-bin.zip
RUN sudo unzip apache-ant-1.10.5-bin.zip -d /home/user/
RUN sudo chown -R user:user /home/user/apache-ant-1.10.5 /home/user/android-sdk


RUN sudo wget -q https://services.gradle.org/distributions/gradle-4.10.2-bin.zip
RUN sudo unzip gradle-4.10.2-bin.zip -d /home/user/.gradle

RUN sudo chown -R user:user /home/user/apache-ant-1.10.5 /home/user/android-sdk /home/user/.gradle

ENTRYPOINT ["buildozer"]

