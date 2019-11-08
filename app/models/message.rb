class Message < ApplicationRecord
  belongs_to :user
  belongs_to :group

  validates :content, presence: true, unless: :image?
  # validates :image, presence: true, unless: :content?
  mount_uploader :image, ImageUploader 
end

