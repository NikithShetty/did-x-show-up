const showUpQuestionBlock = function(X) {
  return [
  	{
  		"type": "section",
  		"text": {
  			"type": "plain_text",
  			"text": `Did ${X} show up to work today?`
  		}
  	},
  	{
      "block_id": "showed_up",
  		"type": "actions",
  		"elements": [
  			{
  				"type": "button",
  				"text": {
  					"type": "plain_text",
  					"text": "Yes"
  				},
  				"action_id": "x_show"
  			},
  			{
  				"type": "button",
  				"text": {
  					"type": "plain_text",
  					"text": "No"
  				},
  				"action_id": "x_no_show"
  			}
  		]
  	}
  ]
}

const showUpResponseBlock = function(X, showedUp, stats) {
  return [
  	{
  		"type": "divider"
  	},
  	{
  		"type": "section",
  		"text": {
  			"type": "mrkdwn",
  			"text": showedUp ? `*Yay! ${X} showed up! :smile:*` : `*${X} didn't show up :white_frowning_face:*`
  		}
  	},
    {
  		"type": "section",
  		"text": {
  			"type": "mrkdwn",
  			"text": `

_${X}'s current streak_: *${stats.currentStreak}*
_${X}'s longest streak_: *${stats.longestStreak}*
_${X} showed up_ *${stats.showUpCount.thisWeek}* _times this week_
_${X} showed up_ *${stats.showUpCount.last30Days}* _times in the last 30 days_
_${X}'s show-up-rate this year so far is_ *${stats.yearShowUpRate}*%`
  		}
  	}
  ]
}

module.exports = {
  showUpQuestionBlock,
  showUpResponseBlock
}
