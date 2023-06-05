# The Motion Project

## SSL
To get the SSL certificates do 
```
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
sudo apt-get install certbot
sudo certbot certonly --standalone --preferred-challenges http -d example.propulsion-learn.ch
```
