import { Avatar, Box, Button, Card, CardHeader, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import type { FC } from 'react';
import { messages } from '@/fake-api/message';
import { formatDistanceToNowStrict } from 'date-fns';




const UnreadMessage:FC=()=>{
  return (
    <>
    <Card sx={{
      mb:5
    }}>
      <CardHeader 
        title={`Unread Message (${messages.length})`}
      />
      <Divider />
        <List disablePadding>
        {messages.map((message, index) => (
        <ListItem
          divider={index + 1 < messages.length}
          key={message.id}
        >
          <ListItemAvatar>
            <Avatar src={message.avatar} />
          </ListItemAvatar>
          <ListItemText
            disableTypography
            primary={(
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex'
                }}
              >
                <Typography variant="subtitle2">
                  {message.fullName}
                </Typography>
                {message.unread && (
                  <Box
                    sx={{
                      backgroundColor: 'primary.main',
                      borderRadius: '50%',
                      height: 8,
                      ml: 1,
                      width: 8
                    }}
                  />
                )}
              </Box>
            )}
            secondary={(
              <Typography
                color="textSecondary"
                variant="body2"
              >
                {message.content}
              </Typography>
            )}
            sx={{ pr: 2 }}
          />
          <Typography
            color="textSecondary"
            sx={{ whiteSpace: 'nowrap' }}
            variant="caption"
          >
            {formatDistanceToNowStrict(message.date, { addSuffix: true })}
          </Typography>
        </ListItem>
      ))}
        </List>
    </Card>
    {/* <Card>
      <CardHeader 
        title={`Maintainance Request`}
      />
      <Divider />
        
    </Card> */}
    </>
  );
}
export default UnreadMessage; 