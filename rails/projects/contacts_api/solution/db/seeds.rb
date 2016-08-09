anna = User.find_or_create_by(username: "Anna")
elsa = User.find_or_create_by(username: "Elsa")
kristoff = User.find_or_create_by(username: "Kristoff")
olaf = Contact.find_or_create_by(name: "Olaf", email: "olaf@frozen.com", user_id: anna.id)
sven = Contact.find_or_create_by(name: "Sven", email: "sven@frozen.com", user_id: anna.id)
hans = Contact.find_or_create_by(name: "Hans", email: "hans@frozen.com", user_id: anna.id)
ContactShare.find_or_create_by(user_id: elsa.id, contact_id: olaf.id)
ContactShare.find_or_create_by(user_id: elsa.id, contact_id: sven.id)
ContactShare.find_or_create_by(user_id: kristoff.id, contact_id: hans.id)