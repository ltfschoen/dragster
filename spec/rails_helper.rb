# This file is copied to spec/ when you run 'rails generate rspec:install'
ENV["RAILS_ENV"] ||= 'test'
require 'spec_helper'
require File.expand_path("../../config/environment", __FILE__)
require 'rspec/rails'
# require 'rspec/autorun'
require 'capybara/rspec'
require 'capybara/rails'
require 'database_cleaner'

Dir[Rails.root.join("spec/support/**/*.rb")].each { |f| require f }

# Checks for pending migrations before tests are run.
ActiveRecord::Migration.maintain_test_schema!

RSpec.configure do |config|
  # Remove this line if you're not using ActiveRecord or ActiveRecord fixtures
  config.fixture_path = "#{::Rails.root}/spec/fixtures"

  # clean test database after each test rather than default RSpec transactions
  config.use_transactional_fixtures = false
  
  DatabaseCleaner.strategy = :truncation

  config.before :each do
    DatabaseCleaner.start
  end
   
  config.after :each do 
    DatabaseCleaner.clean
  end

  config.infer_spec_type_from_file_location!
end

#Capybara.app_host = "http://localhost:3000"
Capybara.server_port = 3000
Capybara.current_driver = :selenium # default driver when using @javascript tag
#Capybara.run_server = true # start server when testing