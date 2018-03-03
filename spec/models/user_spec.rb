require 'rails_helper'
require 'support/violate_check_constraint_matcher'

RSpec.describe User, type: :model do
  describe 'email' do
    let(:user) { User.create!(email: "foo@example.com", password: "abcdefgh", password_confirmation: "abcdefgh") }

    it 'prevents invalid emails' do
      expect{
        user.update_attribute(:email, "foo@bar.com")
      }.to raise_error(ActiveRecord::StatementInvalid, /email_must_be_company_email/i)
    end

    it 'prevents invalid emails' do
      expect{
        user.update_attribute(:email, "foo@bar.com")
      }.to violate_check_constraint(:email_must_be_company_email)
    end
  end
end
