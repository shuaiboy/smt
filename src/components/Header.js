import React, { Component } from 'react';

export default class Header extends Component {
	render() {
		return (
			<div className="header clear">
				<div className="headerLeft">
					<img src="images/logo.png"/>
					<span>物料管理系统</span>
				</div>
						
				<div className="headerRight">
					<div>
						<img src="images/1.png" />
						<span className="userName"></span>
						<img src="images/2.png" className="loginInfo" />
						<div className="login-info">
							<div className="login-out" >退出</div><hr />
							<div className="update-pwd" >修改密码</div><hr />
							<div className="login-other" >其他账号登入</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}