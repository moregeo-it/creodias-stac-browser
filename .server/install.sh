sudo apt update
sudo apt install -y nodejs npm apache2 snapd cron

# Update nodejs to latest lts as the default version in ubuntu is too old
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash
source ~/.bashrc
nvm install --lts

# Install certbot for SSL certificate management
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot

# Get STAC Browser
cd ~
git clone https://github.com/moregeo-it/creodias-stac-browser

# Configure Apache and SSL
sudo a2enmod rewrite
sudo cp ./creodias-stac-browser/.server/browser.conf /etc/apache2/sites-available/000-default.conf
sudo certbot --apache -d browser.stac.creodias.eu
sudo service apache2 restart
sudo crontab -e
# in crontab, add the following lines (without the leading '# '):
# 0 3 * * * /usr/bin/certbot renew --apache -n
# 0 4 * * * /bin/systemctl restart apache2

# Build STAC Browser etc.
bash update.sh
