source 'https://rubygems.org'

group :production do
  gem 'rails', '4.1.4' # bundles edge rails 
  gem 'pg' # use psql as db for Active Record
  gem 'uglifier', '>= 1.3.0' # compressor for JS assets
  gem 'coffee-rails', '~> 4.0.0' # CoffeeScript for .js.coffee assets and views
  # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  # gem 'therubyracer',  platforms: :ruby
  gem 'jbuilder', '~> 2.0' # build JSON APIs
  gem "rails_12factor"
  # gem 'bcrypt', '~> 3.1.7' # ActiveModel has_secure_password
  # gem 'unicorn' # unicorn as the app server
end

group :development, :production do
  # called from application.html.erb
  gem 'jquery-rails' # jQuery JS library
  gem "jquery-ui-rails", "~> 5.0.0"
  gem "bootstrap-sass"
  gem "underscore-rails"
  gem 'turbolinks' # faster links
  gem 'sass-rails', '~> 4.0.3' # SCSS for stylesheets 
end

group :development, :test do
  # gem 'debugger'
  gem "dotenv-rails"
  gem "factory_girl_rails", ">= 4.4.1" # extend Rails default fixtures with factories 
  gem "rspec-rails", ">= 3.0.2"
end

group :test do
  gem "capybara", ">= 2.4.1"
  gem "faker" # generates fake data for testing
  gem "guard-rspec" # runs tests automatically when code changes
  gem "launchy", ">= 2.4.2" # enables save_and_open_page command with Capybara 
  gem "rb-fsevent" # prerequisite for Guard

  # RSpec to load JS when run specs
  gem "selenium-webdriver" # use Selenium as Webdriver when running Feature specs
  gem "database_cleaner", ">= 1.3.0" # clean database after each spec for Selenium
end

group :development do
  # gem 'capistrano-rails' # Capistrano for deployment
  # https://github.com/rails/spring
  gem 'spring' # faster development keeping app running in background
end

group :doc do
  gem 'sdoc', '~> 0.4.0' # bundle exec rake doc:rails generates the API under doc/api.
end
