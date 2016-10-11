# jediJeti #

Primeiro projeto em AngularJS, para apresentar a empresa JetBov. Comecei meus estudos a praticamente uma semana. No decorrer do processo, fui descobrindo os padrões que deveriam ser utilizados, por isso, este projet naõ deve ser tomado como Base de desenvolvimento, tendo em vista que algumas diretrizes do angular não foram respeitadas, pelo puro desconhecimento delas.O fato do AngularJS trabalhar com  single-page applications, cria novos paradigmas de desenvolvimento, que até pouco tempo não
era de meu conhecimento.

Por esse motivo, o projeto não tem uma caracteristiva de single-page applications, mas sim, uma aplicação que roda com auxilio do daemon apache e sua virtual host.

### Módulos Injetados no AngularJS ###
* angular-filter
* angular-messages
* angular-cookies
* angular-chart
* backand

### Repositorio de Interface ###
* Bootstrao

### Emular o Projetona MAquina Local ###
* Apache 2.4

### Configuração Apache ###
*$ sudo mkdir /etc/apache/sites-enables/001-jedijet.conf
*$ sudo nano /etc/apache/sites-enables/001-jedijet.conf

<VirtualHost 0.0.0.0:80>
        ServerAdmin giorgyismael@gmail.com
        ServerName jetforce.com

        LogLevel warn
        DocumentRoot /var/www/jetforce/view/

        <Directory />
                Require all granted
        </Directory>

        Alias /static /var/www/jetforce/static/

        ErrorLog ${APACHE_LOG_DIR}/error-jetforce.log
        CustomLog ${APACHE_LOG_DIR}/access-jetforce.log combined
</VirtualHost>


### Copiar Projeto ###
Copie o projeto para a pasta /var/www 
*$ sudo cp [project] /var/www
