# easy_dotnet
This is web app project for C# ASP .net running on EasyDocker, a docker solution

-Local development build
#
docker build --pull -f dockerSetting/Dockerfile -t aspnetapp .
#
docker stop app-easy-aspnet
#
docker run --rm -d -p 8000:80  -v "$(pwd)/aspnetapp/wwwroot":/app/wwwroot --name app-easy-aspnet aspnetapp

-Cloud integration

Submit https://github.com/easy4docker/easy_dotnet.git on EasyDocker Admin
