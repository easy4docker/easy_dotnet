# easy_dotnet
This is web app project for C# ASP .net running on EasyDocker, a docker solution

## Local development build

1. docker build --pull -f dockerSetting/Dockerfile -t aspnetapp .

2. docker stop app-easy-aspnet

3. docker run --rm -d -p 8000:80  -v "$(pwd)/aspnetapp/wwwroot":/app/wwwroot --name app-easy-aspnet aspnetapp

## Cloud integration

Submit the url https://github.com/easy4docker/easy_dotnet.git on EasyDocker Admin
