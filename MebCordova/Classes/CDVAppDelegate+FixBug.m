//
//  CDVAppDelegate+FixBug.m
//  meb5
//
//  Created by hz on 2017/12/8.
//  Copyright © 2017年 hz. All rights reserved.
//

#import "CDVAppDelegate+FixBug.h"

@implementation CDVAppDelegate (FixBug)

//强制竖屏
#if __IPHONE_OS_VERSION_MAX_ALLOWED < 90000
- (NSUInteger)application:(UIApplication*)application supportedInterfaceOrientationsForWindow:(UIWindow*)window
#else //CB-12098.  Defaults to UIInterfaceOrientationMask for iOS 9+
- (UIInterfaceOrientationMask)application:(UIApplication*)application supportedInterfaceOrientationsForWindow:(UIWindow*)window
#endif
{
    return UIInterfaceOrientationMaskPortrait;
}

@end
