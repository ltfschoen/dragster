require 'capybara/rspec'
require 'spec_helper'


describe 'area page', type: :feature, js: true do

  let(:hostname) { 'http://localhost:3000/' }

  before :each do
  end

  it 'should display area message' do
    visit "#{hostname}"
    expect(page).to have_content 'google'
  end

end