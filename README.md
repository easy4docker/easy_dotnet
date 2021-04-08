# easy_dotnet
This is web app project for ASP .net running on EasyDocker, a docker solution

docker build --pull -f dockerSetting/Dockerfile -t aspnetapp .
docker stop app-easy-aspnet
docker run --rm -d -p 8000:80  -v "$(pwd)/aspnetapp/wwwroot":/app/wwwroot --name app-easy-aspnet aspnetapp