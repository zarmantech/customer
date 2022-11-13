-- Table: customer.cust_ownership_details

-- DROP TABLE IF EXISTS customer.cust_ownership_details;

CREATE TABLE IF NOT EXISTS customer.cust_ownership_details
(
    "custLGBT" boolean,
    "custWebsite" character varying(300) COLLATE pg_catalog."default",
    "custDisabledOwnEnter" character varying(100) COLLATE pg_catalog."default",
    "custVeteranOwnEnter" character varying(100) COLLATE pg_catalog."default",
    "custLegalEntityAddr" character varying(400) COLLATE pg_catalog."default",
    "custCode" character varying(150) COLLATE pg_catalog."default" NOT NULL,
    "ID" integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    CONSTRAINT "custCode_own_pk" PRIMARY KEY ("custCode"),
    CONSTRAINT "custCode" FOREIGN KEY ("custCode")
        REFERENCES customer.cust_header ("custCode") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS customer.cust_ownership_details
    OWNER to postgres;