module Support
  module ModelHelper
    def expect_column_error(record, column)
      expect(record.save).to be false
      expect(record.errors).to have_key column
      expect { record.save(validate: false) }.to raise_error(ActiveRecord::NotNullViolation)
    end
  end
end
