INSERT INTO caliber (caliber,description) VALUES ('.22LR', null), ('.22short', null), ('.357 mag', null), ('9mm', null), ('10mm', null), ('.223 rem', null), ('.556 NATO', null), ('.308', null), ('500 S&W', null), ('.45 ACP', null), ('.25 ACP', null), ('.12ga', null), ('10ga', null); 

INSERT INTO gun_type (type, description) VALUES ('Pistol', null), ('Rifle', null), ('Suppressor', null),('Shotgun', null), ('Accessory', null); 

INSERT INTO manufacture (manufacture_name, description) VALUES ('Daniel Defense', null), ('Kimber', null), ('Keltec', null), ('Ruger',null), ('Beretta', null), ('SilencerCo', null);

INSERT INTO ownership_status (status, description) VALUES ('own', null), ('wishlist', null), ('sold', null), ('out-for-repair', null), ('stolen', null);

INSERT INTO users (full_name, email, password, public_id) VALUES ('Jonathan Alicea', 'hello@boldideas.net', 'xx', '123');