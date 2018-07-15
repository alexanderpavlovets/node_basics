Jenkins: 

at this time - Jenkins runs only with Java8 (not higher). I had to remove Java 10 jdk file.



Commands: 

sudo cat /var/log/jenkins/jenkins.log 
sudo launchctl load /Library/LaunchDaemons/org.jenkins-ci.plist
sudo launchctl unload /Library/LaunchDaemons/org.jenkins-ci.plist

ngrok - for forwarding the localhost to the internet
dwonload - create account - follow the instructions on their webpage
./ngrok http 4567
copy weird URL and paste into github webhooks
