require"rubygems"
require"bundler/setup"
require"sinatra"
require"sinatra/reloader"
require"sinatra/namespace"


$boads = [
  {
    "boad_name" => "boad",
    "boad_num" => 0,
    "come" => ["hello world"],
    "user" => ["user1"],
    "pass" => "123456"
  }
]

def recome(boad_num, come_num)
  p $boads
  @come_sub = $boads[boad_num.to_i]["come"][come_num.to_i]
  @user_sub = $boads[boad_num.to_i]["user"][come_num.to_i]
  return {"come" => @come_sub, "user" => @user_sub}
end



get "/" do
  erb :chat
end

get "/about" do
  erb :about
end


namespace "/ij" do

  post "/newboad" do
    content_type :json
    $boads.push({
    "boad_name" => params[:boad_name],
    "come" => [params[:come]],
    "user" => [params[:user]],
    "pass" => params[:pass].chomp!
    })
    @str_sub = ($boads.size - 1).to_s
    return "'re or se\n?\"MJ GET 10.0.1.22:4567/ij/" + @str_sub + "/"
  end

  get "/*/se" do |boad_num|
    sleep 0.1
    return "OK2\nCLS\n?\"MJ POST START 10.0.1.22:4567/ij/" + boad_num + "/se" + 21.chr + 32.chr + 37.chr + "?\"user=" + 21.chr + 32.chr + 39.chr + "?\"&chat=" + 21.chr + 32.chr + 55.chr + "?\"MJ POST END" + 21.chr + 32.chr + 32.chr
  end

  get "/*/re" do |boad_num|
    @re_hash = recome(boad_num, "0")
    @re_str = "'user name: " + @re_hash["user"] + "\n'" + @re_hash["come"] + "\n" + "press enter to next\n" + "?\"MJ GET 10.0.1.22:4567/ij/" + boad_num.to_s + "/re/" + 1.to_s
    return @re_str
  end

  get "/*/re/*" do |boad_num, come_num|
    @re_hash = recome(boad_num, come_num)
    @re_str = "'user name: " + @re_hash["user"] + "\n'" + @re_hash["come"] + "\n" + "'press enter to next\n?\"MJ GET 10.0.1.22:4567/ij/" + boad_num.to_s + "/re/" + (come_num + 1).to_s
    return @re_str
  end

  post "/*/se" do |boad_num|
    p $boads
    @come = params[:come]
    @user = params[:user]
    if (params[:pass] = nil)

      if (params[:pass].to_s.chomp! == $boads[boad_num.to_i]["pass"].to_s) && (@user.to_s == $boads[boad_num.to_i]["user"][0].to_s)
        $boads[boad_num.to_i]["user"] << @user.chomp + "@nushi"
      else
        $boads[boad_num.to_i]["user"] << @user.chomp
      end

    else
      $boads[boad_num.to_i]["user"] << @user.chomp
    end


    return "'I catch your come!\n'press enter to next\n" + "?\"MJ GET 10.0.1.22:4567/ij/" + boad_num.to_s + "/re"
  end

end
#get "/*/re/*" do |boad_num, come_num|
  #p $boads
  #return recome(boad_num, come_num).to_json
#end

post "/*/se" do |boad_num|
  @come = params[:come]
  @user = params[:user]
  if (params[:pass].to_s.chomp! == $boads[boad_num.to_i]["pass"].to_s) && (@user.to_s == $boads[boad_num.to_i]["user"][0].to_s)
    $boads[boad_num.to_i]["user"] << @user + "@nushi"
  else
    $boads[boad_num.to_i]["user"] << @user
  end
  $boads[boad_num.to_i]["user"] << @user
  return "'I catch your come!\n'press enter to next\n" + "MJ GET 10.0.1.22:4567/ij/" + boad_num.to_s + "/re/0"
end

get "/*/renum" do |boad_num|
  return $boads[@boad_num]["come"].size.to_s
end

post "/*/ij/re/*" do |boad_num, come_num| #あくまでテスト用 必ず消すこと！
  @chat = params[:chat]
  return "tence " + @chat
end
