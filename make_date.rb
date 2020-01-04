require "rubygems"
require "bundler/setup"

$date = [
	{
		"boad_name" => "boad",
		"boad_num" => 1,
		"come" => ["hello"],
		"user" => "dora",
		"pass" => "1234"
	}
]

File.open("date.txt", "w") do |f|
	f.print($date.to_s)
end
