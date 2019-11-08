# Parse arguments for "test", make them not targets:
# If first argument is "test"
ifeq (test,$(firstword $(MAKECMDGOALS)))
  # use the rest as arguments
  RUN_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
  # turn atguments into do-nothing targets
  $(eval $(RUN_ARGS):;@:)
endif

ENV_VARIABLE = $(firstword $(RUN_ARGS))

ifeq ($(ENV_VARIABLE),)
 ENV_VARIABLE := "defaultEnvVariableValue"
endif


#  Commands:

# this will fail, because no chrome setupped in container - don't wont to do it. This is just for demo of Dockerfile/Makefile scripts
test:
	@bash ./scripts/make.image.and.up.container.sh $(ENV_VARIABLE)