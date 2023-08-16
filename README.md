# Test Beanstalk CD

## Steps

1. Create S3 Bucket to Save Deploy/Config Files
2. Create Iam Permissions
   1. Bot Iam for GithubActions
   2. Ec2 Role for Beanstalk Ec2 Instance
3. Create Certificates
4. Create KeyPairs for SSH Access into Ec2 Instances
5. Create Beanstalk Application
   1. Create Beanstalk Environment
6. Create DNS Record in Route 53

## SSH Access into EC2

- Copy _Pem Key_ into `$HOME/.ssh/` Folder

```sh
# Update Key Permissions
chmod 400 test.pem

# SSH Command
ssh -i $HOME/.ssh/test.pem ec2-user@ec2-13-58-189-55.us-east-2.compute.amazonaws.com
```

## Customization Links

- https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/ebextensions.html
- https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/nodejs-configuration-procfile.html
- https://pm2.keymetrics.io/docs/tutorials/use-pm2-with-aws-elastic-beanstalk/
- https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-linux-extend.html
