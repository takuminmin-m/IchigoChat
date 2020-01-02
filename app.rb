require"rubygems"
require"bundler/setup"
require"sinatra"
require"sinatra/reloader"
require"sinatra/namespace"
require"nkf"

time = 0.75
$date = File.open("date.json", "w+")
if $date.read == ""
  $boads = []
else
  $boads = JSON.parse($date.read)
end

def recome(boad_num, come_num)
  p $boads
  @come_sub = $boads[boad_num.to_i]["come"][come_num.to_i]
  @user_sub = $boads[boad_num.to_i]["user"][come_num.to_i]
  return {"come" => @come_sub, "user" => @user_sub}
end

def recome_ij(boad_num, come_num)
  @re_hash = recome(boad_num, come_num)
  @re_str = "'user name: " + @re_hash["user"] + "\n'" + @re_hash["come"] + "\n" 
  if $boads[boad_num.to_i]["come"].size == come_num.to_i + 1
    @re_str = @re_str + "'that is all come\n'boad_number/re, boad_number/se, sarch or newboad\n?\"MJ GET 10.0.1.22:4567/ij/" 
  else
    @re_str = @re_str + "'press enter to next\n" + "?\"MJ GET 10.0.1.22:4567/ij/" + boad_num.to_s + "/re/" + 1.to_s
  end
  p $boads
  return @re_str
end

def sarch_boads(word)
  return $boads.select { |n|
    n["boad_name"].include?(word) || !(n["come"].select{ |n_a| n_a.include?(word) } == [])
  }
end

def nushi
  return 64.chr + 199.chr + 188.chr
end


get "/" do
  erb :chat
end

get "/about" do
  erb :about
end

get "/end" do
  $date.write($boads)
  sleep time
  return "'end"
  exit!
end


namespace "/ij" do

  get "/look" do
    p $boads
    sleep time
    return $boads
  end

  get "/sarch_boads/*" do |word|
    @boads_true = sarch_boads(word)
    @boads_true = @boads_true.map{ |n|
      n["boad_name"] + " &number" + n["boad_num"].to_s + " &" + nushi + n["user"][0] + "\n"
    }
    sleep time
    p $boads
    return @boads_true.to_s + "'type boad number to look\n?\"MJ GET 10.0.1.22:4567/ij/"
  end

  get "/reset" do
    sleep time
    return "UART2\nOK\n'good bue!\n"
  end

  post "/newboad" do
    content_type :json
    $boads.push({
    "boad_name" => params[:boad_name],
    "boad_num" => $boads.size,
    "come" => [params[:come]],
    "user" => [params[:user]],
    "pass" => params[:pass].chomp!
    })
    @str_sub = ($boads.size - 1).to_s
    p $boads
    sleep time
    return "'re or se\n?\"MJ GET 10.0.1.22:4567/ij/" + @str_sub + "/"
  end

  get "/*/se" do |boad_num|
    sleep time
    return "OK2\nUART0\nCLS\nUART2:?\"MJ POST START 10.0.1.22:4567/ij/" + boad_num + "/se" + 21.chr + 32.chr + 37.chr + "?\"user=" + 21.chr + 32.chr + 39.chr + "?\"&come=" + 21.chr + 32.chr + 55.chr + "?\"MJ POST END" + 21.chr + 32.chr + 32.chr
    p $boads
  end

  get "/*/re" do |boad_num|
    sleep time
    return recome_ij(boad_num, 0)
  end

  get "/*/re/*" do |boad_num, come_num|
    sleep time
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
    sleep time
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
