# Setup
First create your venv, then `pip install pip-tools`, then `pip-sync`. Now you
can edit the template in the "{templates,static}" folders, and add shows in the
"content" folder.

# Adding shows
Add a file with the date and venue in the name (i.e. '2017-06-17\_Spinhuis').
The file should contain metadata (Key: data), optionally followed by a blank
line and some text to describe the event. Metadata keys (all optional):

- Date (yyyy-mm-dd)
- Time (hh:mm)
- Title
- Venue
- City
- Address
- Link
- Facebook
- Flyer (url)
- (this is far from a complete list)
