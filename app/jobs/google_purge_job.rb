class GooglePurgeJob < ApplicationJob
  queue_as :default

  def perform(*args)
    RestClient.delete(args.first)
  end
end
