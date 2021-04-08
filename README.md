# easy_dotnet
This is web app project for ASP .net running on EasyDocker, a docker solution

docker build --pull -f dockerSetting/Dockerfile -t aspnetapp .
docker run --rm -d -p 8000:80 aspnetapp