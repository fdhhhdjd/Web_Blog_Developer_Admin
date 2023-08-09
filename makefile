#* ----- Test -----

# Test makefile active
default:
	echo "Web Blog Developer"


#* ----- Developer -----

# Install --dev dependencies
run-install-dev:
	npm install --save-dev
	git config advice.ignoredHook false
	chmod +x .husky/pre-commit .husky/commit-msg

# Install dependencies
run-install:
	npm install

# Run Dev
run-dev:
	npm run dev

# Run all Source
run-all:
	make run-install-dev
	make run-install
	make run-dev

#* ----- Production -----

# Run build
run-build:
	npm run build


