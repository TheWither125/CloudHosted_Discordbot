module.exports = {
    name: 'paste',
    description: "paste your message",
    execute(message, args){

        if(message.member.roles.cache.has('737804239778349056')){
            message.channel.send(message) 


        } else {
            message.channel.send('No permission');
        }
        
        
    }        
}