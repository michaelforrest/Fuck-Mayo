def run(command)
  IO.popen(command){ |process| process.each { |line| puts line } }
end

desc "Deploy to server"
task :deploy do

  push_location = "root@grimaceworks.com:/srv/fuckmayo "
  excludes = %w[*.psd *.bmml .DS_Store .git rakefile.rb].map{ |exclude| "--exclude=#{exclude}" }.join(" ")
  run "rsync -zvrptL --delete-after -e 'ssh' #{excludes} www/ #{push_location}"
  
end
task :default=>:deploy