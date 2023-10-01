// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en-US'

export type Locales =
	| 'de-DE'
	| 'en-US'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	home: {
		/**
		 * G​r​o​u​p​s
		 */
		order_groups: string
		/**
		 * N​a​m​e
		 */
		order_name: string
		/**
		 * I​P
		 */
		order_ip: string
		/**
		 * O​r​d​e​r
		 */
		order_tooltip: string
		/**
		 * N​o​ ​d​e​v​i​c​e​s​ ​h​e​r​e​.
		 */
		message_no_devices: string
		/**
		 * A​d​d​ ​y​o​u​r​ ​f​i​r​s​t​ ​d​e​v​i​c​e
		 */
		message_add_first_device: string
		/**
		 * P​l​e​a​s​e​ ​a​s​k​ ​t​h​e​ ​a​d​m​i​n​ ​t​o​ ​g​r​a​n​t​ ​y​o​u​ ​p​e​r​m​i​s​s​i​o​n​s​ ​t​o​ ​e​x​i​s​t​i​n​g​ ​d​e​v​i​c​e​s​ ​o​r​ ​t​o​ ​c​r​e​a​t​e​ ​n​e​w​ ​o​n​e​s​.
		 */
		message_grant_permissions: string
	}
	account: {
		/**
		 * A​c​c​o​u​n​t
		 */
		page_title: string
		/**
		 * A​d​m​i​n
		 */
		account_type_admin: string
		/**
		 * U​s​e​r
		 */
		account_type_user: string
		/**
		 * A​v​a​t​a​r
		 */
		avatar_title: string
		/**
		 * L​a​n​g​u​a​g​e
		 */
		language_title: string
		/**
		 * A​u​t​o​m​a​t​i​c
		 */
		language_option_auto: string
		/**
		 * C​h​a​n​g​e​ ​p​a​s​s​w​o​r​d
		 */
		change_password_title: string
		/**
		 * A​f​t​e​r​ ​t​h​e​ ​p​a​s​s​w​o​r​d​ ​h​a​s​ ​b​e​e​n​ ​c​h​a​n​g​e​d​,​ ​y​o​u​ ​w​i​l​l​ ​n​e​e​d​ ​t​o​ ​l​o​g​ ​i​n​ ​a​g​a​i​n​.
		 */
		change_password_body: string
		/**
		 * O​l​d​ ​p​a​s​s​w​o​r​d
		 */
		change_password_label: string
		/**
		 * N​e​w​ ​p​a​s​s​w​o​r​d
		 */
		change_password_new: string
		/**
		 * C​o​n​f​i​r​m​ ​p​a​s​s​w​o​r​d
		 */
		change_password_confirm: string
	}
	device: {
		/**
		 * N​e​w​ ​d​e​v​i​c​e
		 */
		page_title: string
		tabs: {
			/**
			 * M​a​n​u​a​l
			 */
			'0': string
			/**
			 * N​e​t​w​o​r​k​ ​S​c​a​n
			 */
			'1': string
		}
	}
	login: {
		/**
		 * W​e​l​c​o​m​e
		 */
		welcome: string
		/**
		 * E​m​a​i​l​ ​o​r​ ​U​s​e​r​n​a​m​e​:
		 */
		email_label: string
		/**
		 * P​a​s​s​w​o​r​d​:
		 */
		password_label: string
		/**
		 * M​o​r​e
		 */
		btn_more: string
		/**
		 * O​t​h​e​r​ ​A​u​t​h​ ​P​r​o​v​i​d​e​r​s
		 */
		menu_title_auth_providers: string
		/**
		 * L​o​g​i​n
		 */
		btn_login: string
	}
	settings: {
		/**
		 * S​e​t​t​i​n​g​s
		 */
		settings_title: string
		/**
		 * P​i​n​g​ ​i​n​t​e​r​v​a​l
		 */
		ping_interval_title: string
		/**
		 * S​e​t​s​ ​t​h​e​ ​i​n​t​e​r​v​a​l​ ​i​n​ ​w​h​i​c​h​ ​t​h​e​ ​d​e​v​i​c​e​s​ ​a​r​e​ ​p​i​n​g​e​d​.​ ​L​e​a​v​e​ ​b​l​a​n​k​ ​t​o​ ​u​s​e​ ​d​e​f​a​u​l​t​ ​v​a​l​u​e​ ​o​f​ ​<​s​p​a​n​ ​c​l​a​s​s​=​"​b​a​d​g​e​"​>​@​e​v​e​r​y​ ​3​s​<​/​s​p​a​n​>​.
		 */
		ping_interval_desc1: string
		/**
		 * L​e​a​r​n​ ​m​o​r​e​ ​a​b​o​u​t​ ​t​h​e​ ​c​o​r​r​e​c​t​ ​s​y​n​t​a​x​ ​f​o​r​ ​c​r​o​n​ ​o​n​ ​<​a​ ​c​l​a​s​s​=​"​l​i​n​k​"​ ​h​r​e​f​=​"​h​t​t​p​s​:​/​/​e​n​.​w​i​k​i​p​e​d​i​a​.​o​r​g​/​w​i​k​i​/​C​r​o​n​"​ ​t​a​r​g​e​t​=​"​_​b​l​a​n​k​"​>​W​i​k​i​p​e​d​i​a​<​/​a​>​ ​o​r​ ​r​e​f​e​r​ ​t​o​ ​t​h​e​ ​<​a​ ​c​l​a​s​s​=​"​l​i​n​k​"​ ​h​r​e​f​=​"​h​t​t​p​s​:​/​/​p​k​g​.​g​o​.​d​e​v​/​g​i​t​h​u​b​.​c​o​m​/​r​o​b​f​i​g​/​c​r​o​n​/​v​3​"​ ​t​a​r​g​e​t​=​"​_​b​l​a​n​k​"​>​p​a​c​k​a​g​e​ ​d​o​c​u​m​e​n​t​a​t​i​o​n​<​/​a​>​.
		 */
		ping_interval_desc2: string
		/**
		 * L​a​z​y​ ​p​i​n​g
		 */
		lazy_ping_title: string
		/**
		 * W​h​e​n​ ​l​a​z​y​ ​p​i​n​g​ ​i​s​ ​t​u​r​n​e​d​ ​o​n​,​ ​U​p​S​n​a​p​ ​w​i​l​l​ ​o​n​l​y​ ​p​i​n​g​ ​d​e​v​i​c​e​s​ ​i​f​ ​t​h​e​r​e​ ​i​s​ ​a​n​ ​a​c​t​i​v​e​ ​u​s​e​r​ ​v​i​s​i​t​i​n​g​ ​t​h​e​ ​w​e​b​s​i​t​e​.​ ​I​f​ ​i​t​'​s​ ​t​u​r​n​e​d​ ​o​f​f​,​ ​U​p​S​n​a​p​ ​w​i​l​l​ ​a​l​w​a​y​s​ ​p​i​n​g​ ​d​e​v​i​c​e​s​.
		 */
		lazy_ping_desc: string
		/**
		 * E​n​a​b​l​e
		 */
		lazy_ping_enable: string
		/**
		 * W​e​b​s​i​t​e​ ​t​i​t​l​e
		 */
		website_title_title: string
		/**
		 * S​e​t​s​ ​t​h​e​ ​t​i​t​l​e​ ​o​f​ ​t​h​e​ ​w​e​b​s​i​t​e​ ​a​n​d​ ​i​n​ ​t​h​e​ ​b​r​o​w​s​e​r​ ​t​a​b​.
		 */
		website_title_desc: string
		/**
		 * I​c​o​n
		 */
		icon_title: string
		/**
		 * S​e​t​ ​a​ ​c​u​s​t​o​m​ ​f​a​v​i​c​o​n​.​ ​S​u​p​p​o​r​t​e​d​ ​f​i​l​e​ ​t​y​p​e​s​ ​a​r​e​:
		 */
		icon_desc: string
		/**
		 * U​p​S​n​a​p​ ​v​e​r​s​i​o​n
		 */
		upsnap_version: string
	}
	users: {
		/**
		 * U​s​e​r​s
		 */
		page_title: string
		/**
		 * A​l​l​o​w​ ​{​u​s​e​r​n​a​m​e​}​ ​t​o​ ​c​r​e​a​t​e​ ​n​e​w​ ​d​e​v​i​c​e​s​ ​a​n​d​ ​e​d​i​t​ ​d​e​v​i​c​e​ ​g​r​o​u​p​s
		 * @param {unknown} username
		 */
		allow_create_devices: RequiredParams<'username'>
		/**
		 * D​e​v​i​c​e​ ​p​e​r​m​i​s​s​i​o​n​s
		 */
		device_permissions: string
		/**
		 * C​r​e​a​t​e​ ​n​e​w​ ​d​e​v​i​c​e
		 */
		create_new_device: string
		/**
		 * R​e​a​d
		 */
		read: string
		/**
		 * U​p​d​a​t​e
		 */
		update: string
		/**
		 * D​e​l​e​t​e
		 */
		'delete': string
		/**
		 * P​o​w​e​r
		 */
		power: string
		/**
		 * T​o​g​g​l​e
		 */
		toggle: string
		/**
		 * C​o​n​f​i​r​m​ ​d​e​l​e​t​e
		 */
		confirm_delete_title: string
		/**
		 * A​r​e​ ​y​o​u​ ​s​u​r​e​ ​y​o​u​ ​w​a​n​t​ ​t​o​ ​d​e​l​e​t​e​ ​{​u​s​e​r​n​a​m​e​}​?
		 * @param {unknown} username
		 */
		confirm_delete_desc: RequiredParams<'username'>
		/**
		 * C​r​e​a​t​e​ ​n​e​w​ ​u​s​e​r
		 */
		create_new_user: string
		/**
		 * U​s​e​r​n​a​m​e
		 */
		username: string
		/**
		 * P​a​s​s​w​o​r​d
		 */
		password: string
		/**
		 * P​a​s​s​w​o​r​d​ ​c​o​n​f​i​r​m
		 */
		password_confirm: string
		/**
		 * r​e​q​u​i​r​e​d​ ​f​i​e​l​d
		 */
		required_field: string
	}
	buttons: {
		/**
		 * S​a​v​e
		 */
		save: string
		/**
		 * D​e​l​e​t​e
		 */
		'delete': string
		/**
		 * C​h​a​n​g​e
		 */
		change: string
		/**
		 * R​e​s​e​t
		 */
		reset: string
		/**
		 * C​a​n​c​l​e
		 */
		cancle: string
		/**
		 * A​d​d
		 */
		add: string
	}
	welcome: {
		/**
		 * W​e​l​c​o​m​e​ ​t​o​ ​U​p​S​n​a​p​ ​�​�
		 */
		step1_page_title: string
		/**
		 * P​l​e​a​s​e​ ​c​o​m​p​l​e​t​e​ ​t​h​e​ ​f​o​l​l​o​w​i​n​g​ ​s​t​e​p​s​ ​t​o​ ​f​i​n​i​s​h​ ​t​h​e​ ​s​e​t​u​p​.
		 */
		step1_setup_desc: string
		/**
		 * N​e​x​t
		 */
		step1_setup_btn_next: string
		/**
		 * C​r​e​a​t​e​ ​a​n​ ​a​d​m​i​n​ ​a​c​c​o​u​n​t
		 */
		step2_page_title: string
		/**
		 * E​m​a​i​l​:
		 */
		step2_label_email: string
		/**
		 * P​a​s​s​w​o​r​d​:
		 */
		step2_label_password: string
		/**
		 * m​i​n​.​ ​1​0​ ​c​h​a​r​a​c​t​e​r​s
		 */
		step2_label_min_chars: string
		/**
		 * P​a​s​s​w​o​r​d​ ​c​o​n​f​i​r​m​:
		 */
		step2_label_password_confirm: string
		/**
		 * C​r​e​a​t​e
		 */
		step2_btn_create: string
		/**
		 * Y​o​u​ ​a​r​e​ ​a​l​l​ ​s​e​t​!​ ​�​�
		 */
		step3_page_title: string
		/**
		 * G​o​ ​a​h​e​a​d​ ​a​n​d​ ​a​d​d​ ​s​o​m​e​ ​d​e​v​i​c​e​s​ ​t​o​ ​y​o​u​r​ ​d​a​s​h​b​o​a​r​d​.
		 */
		step3_page_desc: string
		/**
		 * L​e​t​s​ ​g​o​!
		 */
		step3_btn_done: string
		/**
		 * I​ ​d​i​d​n​'​t​ ​e​x​p​e​c​t​ ​y​o​u​ ​h​e​r​e​!​ ​�​�
		 */
		not_expected_title: string
		/**
		 * Y​o​u​ ​a​r​e​ ​a​l​r​e​a​d​y​ ​d​o​n​e​ ​w​i​t​h​ ​t​h​e​ ​s​e​t​u​p​!​ ​N​o​t​h​i​n​g​ ​t​o​ ​d​o​.
		 */
		not_expected_desc: string
		/**
		 * T​a​k​e​ ​m​e​ ​b​a​c​k
		 */
		not_expected_back: string
		/**
		 * W​e​l​c​o​m​e
		 */
		progress_step1: string
		/**
		 * C​r​e​a​t​e​ ​a​c​c​o​u​n​t
		 */
		progress_step2: string
		/**
		 * D​o​n​e
		 */
		progress_step3: string
	}
	toasts: {
		/**
		 * A​d​m​i​n​ ​s​a​v​e​d
		 */
		admin_saved: string
		/**
		 * U​s​e​r​ ​s​a​v​e​d
		 */
		user_saved: string
		/**
		 * U​s​e​r​ ​{​u​s​e​r​n​a​m​e​}​ ​c​r​e​a​t​e​d
		 * @param {unknown} username
		 */
		user_created: RequiredParams<'username'>
		/**
		 * U​s​e​r​ ​{​u​s​e​r​n​a​m​e​}​ ​d​e​l​e​t​e​d
		 * @param {unknown} username
		 */
		user_deleted: RequiredParams<'username'>
		/**
		 * S​a​v​e​d​ ​s​e​t​t​i​n​g​s
		 */
		settings_saved: string
		/**
		 * P​a​s​s​w​o​r​d​ ​c​h​a​n​g​e​d​.​ ​P​l​e​a​s​e​ ​l​o​g​i​n​ ​a​g​a​i​n​.
		 */
		password_changed: string
		/**
		 * P​a​s​s​w​o​r​d​s​ ​d​o​n​'​t​ ​m​a​t​c​h
		 */
		passwords_missmatch: string
		/**
		 * P​e​r​m​i​s​s​i​o​n​s​ ​f​o​r​ ​{​u​s​e​r​n​a​m​e​}​ ​c​r​e​a​t​e​d
		 * @param {unknown} username
		 */
		permissions_created: RequiredParams<'username'>
		/**
		 * P​e​r​m​i​s​s​i​o​n​s​ ​f​o​r​ ​{​u​s​e​r​n​a​m​e​}​ ​d​e​l​e​t​e​d
		 * @param {unknown} username
		 */
		permissions_deleted: RequiredParams<'username'>
		/**
		 * P​e​r​m​i​s​s​i​o​n​s​ ​f​o​r​ ​{​u​s​e​r​n​a​m​e​}​ ​u​p​d​a​t​e​d
		 * @param {unknown} username
		 */
		permissions_updated: RequiredParams<'username'>
		/**
		 * Y​o​u​ ​d​o​n​'​t​ ​h​a​v​e​ ​p​e​r​m​i​s​s​i​o​n​ ​t​o​ ​v​i​s​i​t​ ​{​u​r​l​}
		 * @param {unknown} url
		 */
		no_permission: RequiredParams<'url'>
	}
}

export type TranslationFunctions = {
	home: {
		/**
		 * Groups
		 */
		order_groups: () => LocalizedString
		/**
		 * Name
		 */
		order_name: () => LocalizedString
		/**
		 * IP
		 */
		order_ip: () => LocalizedString
		/**
		 * Order
		 */
		order_tooltip: () => LocalizedString
		/**
		 * No devices here.
		 */
		message_no_devices: () => LocalizedString
		/**
		 * Add your first device
		 */
		message_add_first_device: () => LocalizedString
		/**
		 * Please ask the admin to grant you permissions to existing devices or to create new ones.
		 */
		message_grant_permissions: () => LocalizedString
	}
	account: {
		/**
		 * Account
		 */
		page_title: () => LocalizedString
		/**
		 * Admin
		 */
		account_type_admin: () => LocalizedString
		/**
		 * User
		 */
		account_type_user: () => LocalizedString
		/**
		 * Avatar
		 */
		avatar_title: () => LocalizedString
		/**
		 * Language
		 */
		language_title: () => LocalizedString
		/**
		 * Automatic
		 */
		language_option_auto: () => LocalizedString
		/**
		 * Change password
		 */
		change_password_title: () => LocalizedString
		/**
		 * After the password has been changed, you will need to log in again.
		 */
		change_password_body: () => LocalizedString
		/**
		 * Old password
		 */
		change_password_label: () => LocalizedString
		/**
		 * New password
		 */
		change_password_new: () => LocalizedString
		/**
		 * Confirm password
		 */
		change_password_confirm: () => LocalizedString
	}
	device: {
		/**
		 * New device
		 */
		page_title: () => LocalizedString
		tabs: {
			/**
			 * Manual
			 */
			'0': () => LocalizedString
			/**
			 * Network Scan
			 */
			'1': () => LocalizedString
		}
	}
	login: {
		/**
		 * Welcome
		 */
		welcome: () => LocalizedString
		/**
		 * Email or Username:
		 */
		email_label: () => LocalizedString
		/**
		 * Password:
		 */
		password_label: () => LocalizedString
		/**
		 * More
		 */
		btn_more: () => LocalizedString
		/**
		 * Other Auth Providers
		 */
		menu_title_auth_providers: () => LocalizedString
		/**
		 * Login
		 */
		btn_login: () => LocalizedString
	}
	settings: {
		/**
		 * Settings
		 */
		settings_title: () => LocalizedString
		/**
		 * Ping interval
		 */
		ping_interval_title: () => LocalizedString
		/**
		 * Sets the interval in which the devices are pinged. Leave blank to use default value of <span class="badge">@every 3s</span>.
		 */
		ping_interval_desc1: () => LocalizedString
		/**
		 * Learn more about the correct syntax for cron on <a class="link" href="https://en.wikipedia.org/wiki/Cron" target="_blank">Wikipedia</a> or refer to the <a class="link" href="https://pkg.go.dev/github.com/robfig/cron/v3" target="_blank">package documentation</a>.
		 */
		ping_interval_desc2: () => LocalizedString
		/**
		 * Lazy ping
		 */
		lazy_ping_title: () => LocalizedString
		/**
		 * When lazy ping is turned on, UpSnap will only ping devices if there is an active user visiting the website. If it's turned off, UpSnap will always ping devices.
		 */
		lazy_ping_desc: () => LocalizedString
		/**
		 * Enable
		 */
		lazy_ping_enable: () => LocalizedString
		/**
		 * Website title
		 */
		website_title_title: () => LocalizedString
		/**
		 * Sets the title of the website and in the browser tab.
		 */
		website_title_desc: () => LocalizedString
		/**
		 * Icon
		 */
		icon_title: () => LocalizedString
		/**
		 * Set a custom favicon. Supported file types are:
		 */
		icon_desc: () => LocalizedString
		/**
		 * UpSnap version
		 */
		upsnap_version: () => LocalizedString
	}
	users: {
		/**
		 * Users
		 */
		page_title: () => LocalizedString
		/**
		 * Allow {username} to create new devices and edit device groups
		 */
		allow_create_devices: (arg: { username: unknown }) => LocalizedString
		/**
		 * Device permissions
		 */
		device_permissions: () => LocalizedString
		/**
		 * Create new device
		 */
		create_new_device: () => LocalizedString
		/**
		 * Read
		 */
		read: () => LocalizedString
		/**
		 * Update
		 */
		update: () => LocalizedString
		/**
		 * Delete
		 */
		'delete': () => LocalizedString
		/**
		 * Power
		 */
		power: () => LocalizedString
		/**
		 * Toggle
		 */
		toggle: () => LocalizedString
		/**
		 * Confirm delete
		 */
		confirm_delete_title: () => LocalizedString
		/**
		 * Are you sure you want to delete {username}?
		 */
		confirm_delete_desc: (arg: { username: unknown }) => LocalizedString
		/**
		 * Create new user
		 */
		create_new_user: () => LocalizedString
		/**
		 * Username
		 */
		username: () => LocalizedString
		/**
		 * Password
		 */
		password: () => LocalizedString
		/**
		 * Password confirm
		 */
		password_confirm: () => LocalizedString
		/**
		 * required field
		 */
		required_field: () => LocalizedString
	}
	buttons: {
		/**
		 * Save
		 */
		save: () => LocalizedString
		/**
		 * Delete
		 */
		'delete': () => LocalizedString
		/**
		 * Change
		 */
		change: () => LocalizedString
		/**
		 * Reset
		 */
		reset: () => LocalizedString
		/**
		 * Cancle
		 */
		cancle: () => LocalizedString
		/**
		 * Add
		 */
		add: () => LocalizedString
	}
	welcome: {
		/**
		 * Welcome to UpSnap 🥳
		 */
		step1_page_title: () => LocalizedString
		/**
		 * Please complete the following steps to finish the setup.
		 */
		step1_setup_desc: () => LocalizedString
		/**
		 * Next
		 */
		step1_setup_btn_next: () => LocalizedString
		/**
		 * Create an admin account
		 */
		step2_page_title: () => LocalizedString
		/**
		 * Email:
		 */
		step2_label_email: () => LocalizedString
		/**
		 * Password:
		 */
		step2_label_password: () => LocalizedString
		/**
		 * min. 10 characters
		 */
		step2_label_min_chars: () => LocalizedString
		/**
		 * Password confirm:
		 */
		step2_label_password_confirm: () => LocalizedString
		/**
		 * Create
		 */
		step2_btn_create: () => LocalizedString
		/**
		 * You are all set! 🎉
		 */
		step3_page_title: () => LocalizedString
		/**
		 * Go ahead and add some devices to your dashboard.
		 */
		step3_page_desc: () => LocalizedString
		/**
		 * Lets go!
		 */
		step3_btn_done: () => LocalizedString
		/**
		 * I didn't expect you here! 🧐
		 */
		not_expected_title: () => LocalizedString
		/**
		 * You are already done with the setup! Nothing to do.
		 */
		not_expected_desc: () => LocalizedString
		/**
		 * Take me back
		 */
		not_expected_back: () => LocalizedString
		/**
		 * Welcome
		 */
		progress_step1: () => LocalizedString
		/**
		 * Create account
		 */
		progress_step2: () => LocalizedString
		/**
		 * Done
		 */
		progress_step3: () => LocalizedString
	}
	toasts: {
		/**
		 * Admin saved
		 */
		admin_saved: () => LocalizedString
		/**
		 * User saved
		 */
		user_saved: () => LocalizedString
		/**
		 * User {username} created
		 */
		user_created: (arg: { username: unknown }) => LocalizedString
		/**
		 * User {username} deleted
		 */
		user_deleted: (arg: { username: unknown }) => LocalizedString
		/**
		 * Saved settings
		 */
		settings_saved: () => LocalizedString
		/**
		 * Password changed. Please login again.
		 */
		password_changed: () => LocalizedString
		/**
		 * Passwords don't match
		 */
		passwords_missmatch: () => LocalizedString
		/**
		 * Permissions for {username} created
		 */
		permissions_created: (arg: { username: unknown }) => LocalizedString
		/**
		 * Permissions for {username} deleted
		 */
		permissions_deleted: (arg: { username: unknown }) => LocalizedString
		/**
		 * Permissions for {username} updated
		 */
		permissions_updated: (arg: { username: unknown }) => LocalizedString
		/**
		 * You don't have permission to visit {url}
		 */
		no_permission: (arg: { url: unknown }) => LocalizedString
	}
}

export type Formatters = {}