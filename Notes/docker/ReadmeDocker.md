Dockerfile - blueprint for image 

Use .gitignore

1) Fill Dockerfile 
2) Build the image:
    docker image build -t test:1.0     
      -t = name:tag
3) Run container from image:
    docker run --env ENV=“ENV env variable value” --rm -it -v "$(dirname `pwd`)/allure-results:/testing-api/allure-results"  test:1.0 bash 
      --rm = remove after exit  
      -it = STDIN and pseudo terminal
      -v = volume. Share folder "$(dirname `pwd`)/allure-results on host" to "testing-api/allure-results"
      bash = start bash terminal (should be installed in Dockerfile if not pre-installed)