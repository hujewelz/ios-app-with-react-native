//
//  RNViewController.m
//  iOSWithReactNative
//
//  Created by mac on 2016/11/24.
//  Copyright © 2016年 hujewelz. All rights reserved.
//

#import "RNViewController.h"

@interface RNViewController ()

@end

@implementation RNViewController

RCT_EXPORT_MODULE(IOSApp);

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
}

//- (void)viewWillAppear:(BOOL)animated {
//    [super viewWillAppear:animated];
//    
//    [self.navigationController setNavigationBarHidden:YES animated:YES];
//}
//
//- (void)viewWillDisappear:(BOOL)animated {
//    [super viewWillDisappear:animated];
//}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}



RCT_EXPORT_METHOD(dismissViewController) {
 
    [self dismissViewControllerAnimated:YES completion:nil];
    
}

@end
