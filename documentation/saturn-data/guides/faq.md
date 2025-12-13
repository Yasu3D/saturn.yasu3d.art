# Frequently Asked Questions

### Why are `Chart` and `Entry` two different types?
Memory cost. For a smooth song select list, all song metadata need to be loaded ahead of time. Loading all Charts alongside that metadata would be very wasteful. 
Separating Chart and metadata allows SATURN to load only what's necessary for the song select list to function, and only load Charts on demand.