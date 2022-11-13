-- Table: customer.cust_header

-- DROP TABLE IF EXISTS customer.cust_header;

CREATE TABLE IF NOT EXISTS customer.cust_header
(
    "custID" integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    "custCode" character varying(150) COLLATE pg_catalog."default" NOT NULL,
    "custName" character varying(200) COLLATE pg_catalog."default" NOT NULL,
    "custPhone1" character varying(15) COLLATE pg_catalog."default",
    "custPhone2" character varying(15) COLLATE pg_catalog."default",
    "custPhone3" character varying(15) COLLATE pg_catalog."default",
    "custMobile" character varying(15) COLLATE pg_catalog."default",
    "custAddress1" character varying(300) COLLATE pg_catalog."default",
    "custAddress2" character varying(300) COLLATE pg_catalog."default",
    "custZip" character varying(10) COLLATE pg_catalog."default",
    "custCity" character varying(20) COLLATE pg_catalog."default",
    "custState" character varying(150) COLLATE pg_catalog."default",
    "custCountry" character varying(200) COLLATE pg_catalog."default",
    CONSTRAINT cust_code_pk PRIMARY KEY ("custCode"),
    CONSTRAINT "custCode" UNIQUE ("custCode")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS customer.cust_header
    OWNER to postgres;