Pod::Spec.new do |s|
  s.name             = 'MebCordova'
  s.version          = '0.1.0'
  s.summary          = '美呗 APP 上需要用到的cordova 的代码.'

  #添加第三方依赖
  s.dependency 'Cordova'

  s.description      = <<-DESC
美呗 APP 上需要用到的cordova 的代码, 插件不包含在内, 需要手动拖到项目中.
                       DESC

  s.homepage         = 'https://github.com/hz/MebCordova'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'hz' => 'zhaohong1991@hotmail.com' }
  s.source           = { :git => 'https://github.com/hz/MebCordova.git', :tag => s.version.to_s }

  s.ios.deployment_target = '9.0'

  s.source_files = 'MebCordova/Classes/**/*.{h,m}'
  s.resources    = 'MebCordova/Assets/**'
  s.public_header_files = 'MebCordova/Classes/**/*.h'

end
