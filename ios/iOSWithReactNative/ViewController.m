//
//  ViewController.m
//  iOSWithReactNative
//
//  Created by mac on 2016/11/24.
//  Copyright © 2016年 hujewelz. All rights reserved.
//

#import "ViewController.h"
#import "RCTBundleURLProvider.h"
#import "RCTRootView.h"
#import "RNViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (IBAction)buttonClicked:(id)sender {

    NSURL *jsCodeLocation;
    
    jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];
    NSLog(@"url: %@", jsCodeLocation.absoluteString);
//    NSDictionary *prop = @{
//                           @"scores" : @[
//                                   @{
//                                       @"name" : @"Alex",
//                                       @"value": @"42"
//                                       },
//                                   @{
//                                       @"name" : @"Joel",
//                                       @"value": @"10"
//                                       }
//                                   ]
//                           };
    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                        moduleName:@"NavigatorIOSApp"
                                                 initialProperties:nil
                                                     launchOptions:nil];
    RNViewController *vc = [[RNViewController alloc] init];
    vc.view = rootView;
    [self presentViewController:vc animated:YES completion:nil];
    //[self.navigationController pushViewController:vc animated:YES];

}


@end
