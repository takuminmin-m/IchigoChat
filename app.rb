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

def recome_ij(boad_num, come_num)
  @re_hash = recome(boad_num, come_num)
  @re_str = "'user name: " + @re_hash["user"] + "\n'" + @re_hash["come"] + "\n" 
  if $boads.size == come_num.to_i + 1
    @re_str = @re_str + "'taht is all come\n'boad_number/re, boad_number/se, sarch or newboad\n?\"MJ GET 10.0.1.22:4567/ij/" 
  else
    @re_str = @re_str + "'press enter to next\n" + "?\"MJ GET 10.0.1.22:4567/ij/" + boad_num.to_s + "/re/" + 1.to_s
  end
  p $boads
  return @re_str
end


get "/" do
  erb :chat
end

get "/about" do
  erb :about
end


namespace "/ij" do

  get "/reset" do
    sleep 1
    return "UART2\nOK\n'good bue!\n"
  end

  post "/newboad" do
    content_type :json
    $boads.push({
    "boad_name" => params[:boad_name],
    "come" => [params[:come]],
    "user" => [params[:user]],
    "pass" => params[:pass].chomp!
    })
    @str_sub = ($boads.size - 1).to_s
    p $boads
    sleep 1
    return "'re or se\n?\"MJ GET 10.0.1.22:4567/ij/" + @str_sub + "/"
  end

  get "/*/se" do |boad_num|
    sleep 1
    return "OK2\nUART0\nCLS\nUART2:?\"MJ POST START 10.0.1.22:4567/ij/" + boad_num + "/se" + 21.chr + 32.chr + 37.chr + "?\"user=" + 21.chr + 32.chr + 39.chr + "?\"&come=" + 21.chr + 32.chr + 55.chr + "?\"MJ POST END" + 21.chr + 32.chr + 32.chr
    p $boads
  end

  get "/*/re" do |boad_num|
    sleep 1
    return recome_ij(boad_num, 0)
  end

  get "/*/re/*" do |boad_num, come_num|
    sleep 1
    return recome_ij(boad_num, come_num)
  end

  post "/*/se" do |boad_num|
    p $boads
    @come = params[:come]
    @user = params[:user]
# スレ主かを判定して、"@ﾇｼ"を追加する
#    if (params[:pass] = nil)
#
#     if (params[:pass].to_s.chomp! == $boads[boad_num.to_i]["pass"].to_s) && (@user.to_s == $boads[boad_num.to_i]["user"][0].to_s)
#        $boads[boad_num.to_i]["user"] << @user.chomp + "@nushi"
#      else
#        $boads[boad_num.to_i]["user"] << @user.chomp
#      end
#
#    else
      $boads[boad_num.to_i]["user"] << @user.chomp
#    end

    $boads[boad_num.to_i]["come"] << @come
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
