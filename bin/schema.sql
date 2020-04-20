create database gundb;

CREATE TABLE caliber (
    id SERIAL PRIMARY KEY,
    caliber character varying(255),
    description text
);

CREATE TABLE gun_type (
    id SERIAL PRIMARY KEY,
    type character varying(255),
    description text
);

CREATE TABLE manufacture (
    id SERIAL PRIMARY KEY,
    manufacture_name character varying(255),
    description text
);

CREATE TABLE ownership_status (
    id SERIAL PRIMARY KEY,
    status character varying(255),
    description text
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    full_Name character varying(255),
    email character varying(255),
    password character varying(255),
    public_id character varying(255) UNIQUE
);

CREATE TABLE gun (
    id SERIAL PRIMARY KEY,
    serial_number character varying(255),
    gun_public_id text,
    manufacture_id integer REFERENCES manufacture(id),
    model text,
    owner_id integer REFERENCES users(id),
    ownership_status_id integer REFERENCES ownership_status(id),
    caliber_id integer REFERENCES caliber(id),
    image text,
    documenation text,
    gun_type_id integer REFERENCES gun_type(id),
    isNFA boolean
);
