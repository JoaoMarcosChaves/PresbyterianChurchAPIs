const express = require('express')

module.exports = server =>{
	const router = express.Router()
	server.use('/api',router)

	const churchService = require('../api/church/churchService')
	const familyService = require('../api/family/familyService')
	const memberService = require('../api/member/memberService')
	const memberListService = require('../api/member/memberListService')
	const birthdayService = require('../api/birthday/birthdaysService')

	churchService.register(router,'/church')
	familyService.register(router,'/family')
	memberService.register(router,'/member')

	router.route('/birthday/month').get(birthdayService.monthBirthday)
	router.route('/birthday/month/:month').get(birthdayService.selectedMonthBirthday)
	router.route('/birthday/week').get(birthdayService.weekBirthday)
	router.route('/birthday/lastWeek').get(birthdayService.lastWeekBirthday)

	router.route('/member/frequent').get(memberListService.frequentMembersList)
	router.route('/member/infrequent').get(memberListService.infrequentMembersList)
	router.route('/member/active').get(memberListService.activeMembersList)
	router.route('/member/inactive').get(memberListService.inactiveMembersList)
	router.route('/member/order').get(memberListService.fullMembersOrderedList)
	router.route('/member/byFamily').get(memberListService.membersByFamilyList)
}