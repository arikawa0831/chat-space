json.(@message, :content, :image)
json.time @message.created_at.strftime("%Y/%m/%d (%a) %H:%M")
json.name @message.user.name
json.id @message.id