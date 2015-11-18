
CREATE TABLE VL_TRACE_INFO_IF
(
    IF_SEQ              VARCHAR(32)   CONSTRAINT PK_VL_TRACE_INFO_IF PRIMARY KEY,
    IF_REG_DTTM         VARCHAR(17)   NOT NULL,
    IF_CUD_FLAG         char(1)       NOT NULL,
    IF_HNDL_DTTM        VARCHAR(17),
    IF_HNDL_FLAG        char(1)       NOT NULL,
    IF_HNDL_ERR         VARCHAR(300),
    VL_TRACE_INFO_SEQ   NUMBER(20),
    DEVICE_ID           VARCHAR(12),
    DSR_SEQ             VARCHAR(12),
    WARD_ID             VARCHAR(7),
    CAR_ID              VARCHAR(20),
    INPUT_DATETIME      VARCHAR(14),
    INPUT_SEQ           NUMBER(4),   
    COLLECT_TIME        VARCHAR(12),
    CAR_GIS_X           NUMBER(10),  
    CAR_GIS_Y           NUMBER(10), 
    D_WEEKDAY           char(1),
    D_UPWARD_ID         VARCHAR(7)
);

CREATE TABLE VL_TRACE_INFO
(
    VL_TRACE_INFO_SEQ   NUMBER(20)    NOT NULL,
    DEVICE_ID           VARCHAR(12)   NOT NULL,
    DSR_SEQ             VARCHAR(12)   NOT NULL,
    WARD_ID             VARCHAR(7),
    CAR_ID              VARCHAR(20)   NOT NULL,
    INPUT_DATETIME      VARCHAR(14)   NOT NULL,
    INPUT_SEQ           NUMBER(4),   
    COLLECT_TIME        VARCHAR(12)   NOT NULL,
    CAR_GIS_X           NUMBER(10),  
    CAR_GIS_Y           NUMBER(10), 
    D_WEEKDAY           char(1)
);

CREATE TABLE VL_TRACE_INFO2
(
    VL_TRACE_INFO_SEQ   NUMBER(20)    NOT NULL,
    DEVICE_ID           VARCHAR(12)   NOT NULL,
    DSR_SEQ             VARCHAR(12)   NOT NULL,
    WARD_ID             VARCHAR(7),
    CAR_ID              VARCHAR(20)   NOT NULL,
    INPUT_DATETIME      VARCHAR(14)   NOT NULL,
    INPUT_SEQ           NUMBER(4),   
    COLLECT_TIME        VARCHAR(12)   NOT NULL,
    CAR_GIS_X           NUMBER(10),  
    CAR_GIS_Y           NUMBER(10), 
    D_WEEKDAY           char(1)
);

commit;
