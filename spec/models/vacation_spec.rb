# == Schema Information
#
# Table name: vacations
#
#  id         :bigint(8)        not null, primary key
#  latitude   :float            not null
#  longitude  :float            not null
#  summary    :text             default(""), not null
#  title      :string           not null
#  year       :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe Vacation, type: :model do
  let(:vacation) { build(:vacation) }

  context 'when required fields are satisfied' do
    it 'saves' do
      expect(vacation.save).to be true
    end
  end

  context 'when missing latitude' do
    it 'adds field error' do
      vacation.latitude = nil
      expect_column_error vacation, :latitude
    end
  end

  context 'when missing longitude' do
    it 'adds field error' do
      vacation.longitude = nil
      expect_column_error vacation, :longitude
    end
  end

  context 'when missing year' do
    it 'adds field error' do
      vacation.year = nil
      expect_column_error vacation, :year
    end
  end

  context 'when missing title' do
    it 'adds field error' do
      vacation.title = nil
      expect_column_error vacation, :title
    end
  end

  context 'when missing summary' do
    it 'adds field error' do
      vacation.summary = nil
      expect_column_error vacation, :summary
    end
  end
end
