#
aws s3 rb --force s3://awsauthorizersaapi-dev-serverlessdeploymentbucket-s1ze80scs51d
aws s3 rb --force s3://awsauthorizersapi-dev-serverlessdeploymentbucket-rk5qgfnsssea
aws s3 rb --force s3://cognitosample-localapp
aws s3 rb --force s3://createmariadbtableservic-serverlessdeploymentbuck-w8bbbhr7wd9u
aws s3 rb --force s3://fetch-file-and-store-in-serverlessdeploymentbuck-6mpod0f5j3eu
aws s3 rb --force s3://mariadbservice-dev-serverlessdeploymentbucket-1fe0dq29iatn0
aws s3 rb --force s3://my-service-dev-serverlessdeploymentbucket-1nqdb14rars6
aws s3 rb --force s3://serverless-rest-api-with-serverlessdeploymentbuck-1aul45zu29g1j



CREATE TABLE IF NOT EXISTS device_info (
     id BIGINT AUTO_INCREMENT NOT NULL,
     xid VARCHAR(256) NOT NULL,
     name VARCHAR(256) NOT NULL,
     version VARCHAR(256) NOT NULL,
     timestamp  BIGINT,
     PRIMARY KEY (id)
 );