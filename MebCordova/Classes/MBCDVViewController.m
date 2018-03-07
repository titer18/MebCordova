//
//  MBCDVViewController.m
//  meb5
//
//  Created by 魏伟 on 2017/7/26.
//  Copyright © 2017年 hz. All rights reserved.
//

#import "MBCDVViewController.h"

@interface MBCDVViewController ()

@property (nonatomic, assign) BOOL preNaviBarHidden;

@end

@implementation MBCDVViewController

- (instancetype)init
{
    self = [super init];
    
    if (self) {
        // 获取bundle参数
        NSBundle *bundle = [NSBundle bundleForClass:self.class];
        self.wwwFolderName = [bundle pathForResource:@"www" ofType:nil];
        self.startPage = [bundle pathForResource:@"index" ofType:@"html"];
        self.configFile = [bundle pathForResource:@"config" ofType:@"xml"];
    }
    
    return self;
}

- (void)viewDidLoad
{
    [super viewDidLoad];
    [self.navigationController.navigationBar setBarTintColor:[UIColor whiteColor]];
    self.view.backgroundColor = [UIColor whiteColor];
    self.webView.backgroundColor = [UIColor whiteColor];
    
    //强制控制webview从状态栏下边开始布局
    CGRect newFrame = self.webView.frame;
    CGFloat screenHeight = [[UIScreen mainScreen]bounds].size.height;
    CGFloat tabBarHeight = 49;
    
    newFrame.size = CGSizeMake(newFrame.size.width, screenHeight + tabBarHeight);
    self.webView.frame = newFrame;
}

- (void)viewWillAppear:(BOOL)animated
{
    [super viewWillAppear:animated];
    [self.navigationController setNavigationBarHidden:YES animated:animated];
}

-(void)viewDidAppear:(BOOL)animated{
    [super viewDidAppear:animated];
    
    CGRect newFrame = self.webView.frame;
    CGFloat screenHeight = [[UIScreen mainScreen]bounds].size.height;
    
    newFrame.size = CGSizeMake(newFrame.size.width, screenHeight );
    self.webView.frame = newFrame;
    [self setStatusBarBackgroundColor:[UIColor whiteColor]];
}

- (void)viewWillDisappear:(BOOL)animated
{
    [super viewWillDisappear:animated];
    
    [self.navigationController setNavigationBarHidden:NO animated:animated];
    [self setStatusBarBackgroundColor:[UIColor clearColor]];
}

//设置状态栏颜色
- (void)setStatusBarBackgroundColor:(UIColor *)color {
    
    UIView *statusBar = [[[UIApplication sharedApplication] valueForKey:@"statusBarWindow"] valueForKey:@"statusBar"];
    if ([statusBar respondsToSelector:@selector(setBackgroundColor:)]) {
        statusBar.backgroundColor = color;
    }
}

//是如何进入当前控制器的
- (BOOL)isModal
{
    if ([self respondsToSelector:@selector(presentingViewController)])
    {
        if([self presentingViewController])
            return YES;
        if([[self presentingViewController] presentedViewController] == self)
            return YES;
        if([[[self navigationController] presentingViewController] presentedViewController] == [self navigationController])
            return YES;
        if([[[self tabBarController] presentingViewController] isKindOfClass:[UITabBarController class]])
            return YES;
    }
    
    return NO;
}

- (void)goBackAction
{
    if([self isModal])
    {
        dispatch_async(dispatch_get_main_queue(), ^{
            [super dismissViewControllerAnimated:YES completion:nil];
        });
    }
    else
    {
        dispatch_async(dispatch_get_main_queue(), ^{
            [self.navigationController popViewControllerAnimated:YES];
        });
    }
}
@end
